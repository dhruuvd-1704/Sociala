import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUserProfile } from "@/redux/authSlice.js";
import { X } from "lucide-react";

const useGetUserProfile = (userId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        // Corrected URL: remove the colon before userId
        const res = await axios.get(
          `http://localhost:8000/api/v1/user/${userId}/profile`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setUserProfile(res.data.user));
          console.log(res.data.user);
        } else {
          console.error("API returned success: false", res.data);
        }
      } catch (err) {
        console.error("Failed to load user profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId, dispatch]);

  return loading;
};

export default useGetUserProfile;
