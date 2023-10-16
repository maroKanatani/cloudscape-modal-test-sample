import Modal from "@cloudscape-design/components/modal";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import { useState } from "react";

export const SampleModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open</Button>
      <Modal
        onDismiss={() => setVisible(false)}
        visible={visible}
        closeAriaLabel="Close"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link">Cancel</Button>
              <Button variant="primary">Ok</Button>
            </SpaceBetween>
          </Box>
        }
        header="Modal title"
      >
        Your description should go here
      </Modal>
    </>
  );
};
