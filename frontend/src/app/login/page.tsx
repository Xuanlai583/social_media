"use client";

import { on } from "events";
import { Formik, Form } from "formik";
import Image from "next/image";

interface formikInitialValues {
  email: string;
  password: string;
}

const initialValues: formikInitialValues = {
  email: "",
  password: "",
};

const PrimaryInput = () => {
  return <input className="w-full" />;
};

export default function Login() {
  const onSubmit = (values: formikInitialValues) => {};

  return (
    <main className="w-full h-full pt-24">
      <section className="w-full flex flex-col items-center">
        <Image
          width={198}
          height={78}
          src={"/facebook.png"}
          alt={"Facebook icon"}
        />

        <Formik<formikInitialValues>
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form className="w-full flex flex-col bg-white drop-shadow-sm pt-4 pb-6 max-w-sm px-2">
            <PrimaryInput/>
            <PrimaryInput/>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
