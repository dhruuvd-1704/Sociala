// import { setMessages } from "@/redux/chatSlice";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const useGetAllMessages = () => {
//   const dispatch = useDispatch();
//   const { selectedUser } = useSelector((store) => store.auth);
//   useEffect(() => {
//     const fetchAllMessage = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/v1/message/all/${selectedUser?._id}`,
//           { withCredentials: true }
//         );
//         if (res.data.success) {
//           dispatch(setMessages(res.data.messages));
//           // console.log(res.data)
//         }
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchAllMessage();
//   }, []); // Add `dispatch` as a dependency
// };

// export default useGetAllMessages;

// src/hooks/useGetAllMessages.js
import { setMessages } from "@/redux/chatSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllMessages = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.auth);

  useEffect(() => {
    if (!selectedUser?._id) return;

    const fetchAllMessages = async () => {
      try {
        // ← make sure this matches the port your Express server is actually listening on!
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/all/${selectedUser._id}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          // guard against undefined
          dispatch(
            setMessages(
              Array.isArray(res.data.messages) ? res.data.messages : []
            )
          );
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchAllMessages();
  }, [selectedUser._id, dispatch]);
};

export default useGetAllMessages;
