import {
    useUser as useSupaUser,
    User
  } from '@supabase/supabase-auth-helpers/react';
  import { useState, useEffect } from "react";
import { supabase } from './supabase-client';
import { UserContext } from "./useUser";

export default async function isUserGold(): Promise<boolean> {
  await supabase.auth().currentUser?.getIdToken(true);
  const decodedToken = await supabase.auth().currentUser?.getIdTokenResult();

  return decodedToken?.claims?.stripeRole ? true : false;
}