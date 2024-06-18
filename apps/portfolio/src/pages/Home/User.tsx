interface UserProps {
  name: string;
  avatar?: string;
}
export const User = ({ name, avatar }: UserProps) => (
  <div className="w-full flex gap-5 pb-3 border-b border-selago-200">
    <img
      src={
        avatar ??
        "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
      }
      alt={name}
      className="w-full max-w-14 rounded-full max-h-14 h-full object-center object-cover"
    />

    <div>
      <h1 className="text-2xl font-semibold text-selago-950">Hello, {name}</h1>
      <p className="text-selago-700">Welcome to the Artworks Portfolio.</p>
    </div>
  </div>
);
