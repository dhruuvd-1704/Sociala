// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
// import React, { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Button } from './ui/button';
// import axios from 'axios';

// const EditProfile = () => {
//   const { user } = useSelector((store) => store.auth);
//   const imageRef = useRef(null);

//   // local form state
//   const [preview, setPreview] = useState(user?.profilePicture);
//   const [bio, setBio] = useState(user?.bio || '');
//   const [gender, setGender] = useState(user?.gender || '');
//  const [loading, setLoading] = useState(false);
//   // handlers
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setPreview(URL.createObjectURL(file));
//     // TODO: upload image file
//   };
//   const handleSave = () => {
//     // TODO: dispatch({ type: 'auth/updateProfile', payload: { bio, gender, imageFile } })
//   try{
//     setLoading(true);
//     const res = await axios.post(
//       'http://localhost:8000//api/v1/post/profile/edit',{

//       })
//   } catch(error){
//     console.error("Error saving profile:", error);
//   }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
//       <section className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-6">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
//           Edit Profile
//         </h1>

//         {/* Avatar + change */}
//         <div className="flex items-center space-x-6">
//           <Avatar className="h-24 w-24 rounded-full border-2 border-gray-300 dark:border-gray-600 overflow-hidden">
//             <AvatarImage src={preview} className="object-cover w-full h-full" />
//             <AvatarFallback className="bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-white flex items-center justify-center h-full w-full text-2xl">
//               {user?.username?.[0]?.toUpperCase() || '?'}
//             </AvatarFallback>
//           </Avatar>
//           <div>
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
//               {user?.username}
//             </h2>
//             <input
//               ref={imageRef}
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//             <Button
//               variant="outline"
//               className="mt-2"
//               onClick={() => imageRef.current?.click()}
//             >
//               Change Photo
//             </Button>
//           </div>
//         </div>

//         {/* Form fields */}
//         <div className="space-y-4">
//           {/* Bio */}
//           <div>
//             <label
//               htmlFor="bio"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//             >
//               Bio
//             </label>
//             <textarea
//               id="bio"
//               value={bio}
//               onChange={(e) => setBio(e.target.value)}
//               rows={4}
//               className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
//               placeholder="Tell us a bit about yourself..."
//             />
//           </div>

//           {/* Gender */}
//           <fieldset>
//             <legend className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Gender
//             </legend>
//             <div className="flex items-center space-x-4">
//               {['Male', 'Female', 'Other'].map((option) => (
//                 <label
//                   key={option}
//                   className={`flex-1 cursor-pointer rounded-lg border p-2 text-center text-sm font-medium
//                     ${
//                       gender === option
//                         ? 'bg-indigo-600 text-white border-indigo-600'
//                         : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
//                     }`}
//                 >
//                   <input
//                     type="radio"
//                     name="gender"
//                     value={option}
//                     checked={gender === option}
//                     onChange={() => setGender(option)}
//                     className="sr-only"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </fieldset>
//         </div>

//         {/* Actions */}
//         <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
//           <Button variant="ghost" onClick={() => {/* TODO: reset form or navigate away */}}>
//             Cancel
//           </Button>
//           <Button onClick={handleSave}>Save</Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EditProfile;




import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';

const EditProfile = () => {
  const { user } = useSelector((store) => store.auth);
  const imageRef = useRef(null);

  // local form state
  const [preview, setPreview] = useState(user?.profilePicture);
  const [bio, setBio] = useState(user?.bio || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [username, setUsername] = useState(user?.username || '');
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);

  // handlers
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfilePicture(file);
    setPreview(URL.createObjectURL(file));
  };
  const handleSave = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('bio', bio);
      formData.append('gender', gender.toLowerCase());
      formData.append('username', username);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }

      const res = await axios.post(
        'http://localhost:8000/api/v1/user/profile/edit',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      // Optionally show a toast or update redux here
      // alert(res.data.message || "Profile updated!");
      toast.success(res.data.message || "Profile updated!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <section className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Edit Profile
        </h1>

        {/* Avatar + change */}
        <div className="flex items-center space-x-6">
          <Avatar className="h-24 w-24 rounded-full border-2 border-gray-300 dark:border-gray-600 overflow-hidden">
            <AvatarImage src={preview} className="object-cover w-full h-full" />
            <AvatarFallback className="bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-white flex items-center justify-center h-full w-full text-2xl">
              {username?.[0]?.toUpperCase() || '?'}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {username}
            </h2>
            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => imageRef.current?.click()}
              disabled={loading}
            >
              Change Photo
            </Button>
          </div>
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your username"
              disabled={loading}
            />
          </div>
          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Tell us a bit about yourself..."
              disabled={loading}
            />
          </div>

          {/* Gender */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Gender
            </legend>
            <div className="flex items-center space-x-4">
              {['Male', 'Female', 'Other'].map((option) => (
                <label
                  key={option}
                  className={`flex-1 cursor-pointer rounded-lg border p-2 text-center text-sm font-medium
                    ${
                      gender === option
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                    }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={() => setGender(option)}
                    className="sr-only"
                    disabled={loading}
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button variant="ghost" disabled={loading} onClick={() => window.history.back()}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;