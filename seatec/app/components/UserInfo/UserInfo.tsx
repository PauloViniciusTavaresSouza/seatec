interface UserInfoProps {
  user:
    | {
        id?: number;
        name?: string | null;
        email?: string | null;
        password?: string;
        role?: string;
      }
    | undefined;
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.role}</p>
    </>
  );
}
