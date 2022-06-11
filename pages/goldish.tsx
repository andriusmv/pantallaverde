import { useState, useEffect } from "react";
import { supabase } from '@/utils/supabase-client';
import { useUser } from "@/utils/useUser";

const Goldish = () => {
    const [Status, setStatus] = useState();
    const { user } = useUser();
  
  useEffect(() => {
    const getCurrentStatus = async () => {
      const { data } = await supabase
        .from("products")
        .select("name")
        .eq("Gold Membership", null)
        .single();
  
      setStatus(data);
    };
}, []);

    return (
<div>
    {user ? (
        <p>Hello, {user.email}</p>
        
    ) : (<p>You need to log in</p>)}
</div>
    )};

