import { useSharedStates } from "@/contexts";
import { BtnContainer, QuestionBoxHeading, QuestionBoxPara } from "../index";

export function Intro() {
  const { handleOkClick } = useSharedStates();

  return (
    <>
      <QuestionBoxHeading>
        <strong>
          Consentimiento Informado para la Evaluación de Motivación Laboral
        </strong>
      </QuestionBoxHeading>
      <QuestionBoxPara>
        El propósito de este consentimiento es informarte acerca del proceso de
        recolección de datos con motivo de la evaluación de Motivación Laboral
        de (Nombre de la empresa). Solicitamos tu colaboración y sinceridad para
        contestar las preguntas del presente formulario.
        <br />
        Esta evaluación tiene como objetivo identificar los tipos de motivadores
        intrínsecos y extrínsecos que influyen en los colaboradores. No se mide
        el nivel de motivación, sino los factores que son más relevantes para
        cada individuo. Los resultados se analizarán a nivel individual y
        organizacional.
        <br />
        <br />
        Si deseas obtener más información sobre este estudio o presentas dudas e
        inquietudes acerca de tu participación, podrás comunicarte al siguiente
        correo electrónico: info@ioda-analytics.com.
      </QuestionBoxPara>
      <BtnContainer showPressEnter={true} onClick={handleOkClick}>
        Acepto
      </BtnContainer>
    </>
  );
}
