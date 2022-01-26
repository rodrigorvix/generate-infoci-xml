import { UnidadeGestora } from "../UnidadeGestora";

export const ListaUnidadeGestora = ({ formik, setValue }: any) => {
  return(
    <>
      <UnidadeGestora formik={formik} setValue={setValue}/>
    </>
  );
}