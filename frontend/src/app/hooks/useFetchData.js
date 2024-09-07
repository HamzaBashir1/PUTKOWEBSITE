
"use client"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(err.message);
      }
    };
    if (url && token) {
      fetchData(); // Only fetch if URL and token exist
    }
  }, [url, token]);

  return { data, loading, error };
};

export default useFetchData;
