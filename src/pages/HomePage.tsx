import { useState } from "react";

import PlusIcon from "../icons/PlusIcon";
import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";

function HomePage() {
  const [openTopicModal, setOpenTopicModal] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex items-center justify-between cursor-default
      border-b border-white
      w-full py-6"
      >
        <h1 className="text-2xl sm:text-3xl">TOPICS</h1>

        <Button onClick={() => setOpenTopicModal(true)}>
          <span>
            <PlusIcon />
          </span>

          <p>New Topic</p>
        </Button>
      </div>

      <Modal
        title="New Topic"
        isOpen={openTopicModal}
        onClose={() => {
          setOpenTopicModal(false);
        }}
      />
    </>
  );
}

export default HomePage;
