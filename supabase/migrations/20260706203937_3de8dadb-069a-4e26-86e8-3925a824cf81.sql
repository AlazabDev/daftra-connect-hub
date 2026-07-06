
-- Admin moderation for comments via RLS
CREATE POLICY "Admins can update comments"
ON public.comments
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete comments"
ON public.comments
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin management for azgallery storage bucket objects
CREATE POLICY "Admins can update azgallery objects"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete azgallery objects"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'));
