import { ModalVideo } from "~/components";

export const HomePage = () => {
  return (
    <div className="flex-1">
      <ModalVideo.Root>
        <ModalVideo.Trigger />
        <ModalVideo.Content />
      </ModalVideo.Root>
    </div>
  );
};

export default HomePage;
