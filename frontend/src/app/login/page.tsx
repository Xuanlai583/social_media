import { on } from "events";
import { Formik } from "formik";
import Image from "next/image";

interface formikInitialValues {
    email: string;
    password: string;
}   

const initialValues: formikInitialValues = {
  email: "",
  password: "",
};




export default function Login() {
    const onSubmit = (values: formikInitialValues) => {}




  return (
    <main className="pt-24 flex justify-center">
      <section>
        <Image
          width={198}
          height={78}
          src={"/facebook.png"}
          alt={"Facebook icon"}
        />
      </section>

      <Formik<formikInitialValues> initialValues={initialValues} onSubmit={onSubmit}>
       
      </Formik>
    </main>
  );
}
