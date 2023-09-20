import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { toast } from "react-hot-toast";

export default function NewsletterPopup() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const submit = async (onClose) => {
    console.log(name, email);
    await fetch("https://formbold.com/s/35XZR", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    toast.success("You are now on the waitlist!", {
      duration: 5000,
      position: "top-center",
    });
    onClose();
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="px-5 py-2 text-white bg-emerald-400 hover:bg-gradient-to-r hover:to-emerald-400 hover:from-sky-500 hover:text-white rounded-full"
      >
        Download
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        className="z-999"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Download Squanch
              </ModalHeader>
              <ModalBody>
                <p>
                  The extension is not yet available. Leave us your email to be
                  the first to know when it is ready.
                </p>
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  onValueChange={(value) => setName(value)}
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                  onValueChange={(value) => setEmail(value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    submit(onClose);
                  }}
                >
                  Sign Up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
