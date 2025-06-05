import { NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4];
  return (
    <div className="flex gap-20">
      <div className="flex flex-col gap-3">
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "text-pink-500" : "";
            }}
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ProfilesPage;
