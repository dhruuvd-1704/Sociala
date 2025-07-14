import { Dialog, DialogContent, DialogPortal } from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'; // Import SweetAlert2 styles
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import Posts from './Posts';
import { setPosts } from '@/redux/postSlice';


// Helper to convert a File into a base64 Data URL
const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const CreatePost = ({ open, setOpen }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const {posts} = useSelector((store) => store.post)
  const createPostHandler = async (e) => {
    e.preventDefault();
    console.log({ caption, image, dataUrl: previewUrl });
    // …perform your upload or API call here using `previewUrl` as the base64 data…
    const formData = new FormData();
    formData.append("caption",caption)
    if(previewUrl) formData.append("image",image);
    try{
        setLoading(true);
        const res = await axios.post("http://localhost:8000/api/v1/post/addpost",formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            },
            withCredentials:true
        }); 
        if(res.data.success) {
            dispatch(setPosts([res.data.post,...posts]))
            toast.success(res.data.message)
        }
    }catch(error){
        toast.error(error.response?.data?.message || error.message);
    }finally{
        setLoading(false);
    }
  };

  const handleDiscard = async () => {
    // Close the Radix dialog so the SweetAlert can sit on top
    setOpen(false);

    setTimeout(async () => {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover this post!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, discard it!',
        cancelButtonText: 'Cancel',
      });

      if (result.isConfirmed) {
        // Clear all form state
        setCaption("");
        setImage(null);
        setPreviewUrl(null);

        await Swal.fire({
          title: 'Discarded!',
          text: 'Your post has been discarded.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        // User canceled: re‑open the Radix dialog
        setOpen(true);
      }
    }, 100);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setImage(file);

    try {
      const dataUrl = await readFileAsDataURL(file);
      setPreviewUrl(dataUrl);
    } catch (error) {
      console.error("Error reading file as Data URL", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        {/* dark blurred background */}
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-md"
          aria-hidden="true"
        />

        <DialogContent
          onInteractOutside={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <div className="w-full max-w-md bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(128,90,213,0.5)]">
            <form onSubmit={createPostHandler}>
              <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
                Create a Post
              </h2>

              {/* Image Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 focus:outline-none p-2"
                  disabled={loading}
                />

                {/* Preview container */}
                {previewUrl && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 mb-2">
                      Selected file: {image.name}
                    </p>
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full max-h-64 object-cover rounded-lg border border-gray-300"
                    />
                  </div>
                )}
              </div>

              {/* Caption Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Caption
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="What's on your mind?"
                  rows="4"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Buttons */}
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-pink-600 transition-all"
                  onClick={handleDiscard}
                  disabled={loading}
                >
                  Discard
                </button>
                <button
                  type="button"
                  className="px-5 py-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 text-sm font-medium rounded-lg hover:from-gray-400 hover:to-gray-500 transition-all"
                  onClick={() => setOpen(false)}
                  disabled={loading}
                >
                  Cancel
                </button>

                {previewUrl && (
                  loading ? (
                    <Button className="px-5 py-2">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </Button>
                  ) : (
                    <Button type="submit" className="px-5 py-2">
                      Post
                    </Button>
                  )
                )}
              </div>
            </form>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CreatePost;
