import { BtnContainer, QuestionBoxPara, QuestionNumHeading } from "../index";
import Image from "next/image";
import styles from "./Question.module.css"; // Importa los estilos
import classNames from "classnames"; // Para manejar múltiples clases
import { useRouter } from "next/router"; // Importa useRouter

const Agradecimiento = ({ handleSubmit }: { handleSubmit: () => void }) => {
  const router = useRouter(); // Inicializa el router

  const handleClick = async () => {
    try {
      // Primero ejecuta la función de guardar
      await handleSubmit();

      // Luego redirige a la siguiente página
      router.push("https://ioda-analytics.com/quienes-somos");
    } catch (error) {
      console.error("Error durante el envío o la redirección:", error);
    }
  };

  return (
    <div>
      <QuestionNumHeading questionNum={10}>
        ¡Gracias por tus respuestas!
      </QuestionNumHeading>

      <QuestionBoxPara>
        Dale &quot;Enviar&quot; para guardar tu información.
      </QuestionBoxPara>

      {/* Botón con estilos */}
      <BtnContainer
        className={classNames(styles["btn-container"], styles["ok"])} // Reutiliza las mismas clases de estilo
        onClick={handleClick} // Cambiamos a handleClick para manejar el submit y la redirección
        showPressEnter={false} // Pasas un valor para showPressEnter
      >
        Enviar
        <Image
          src="/check-small.svg"
          alt="check small"
          width={34}
          height={34}
        />
      </BtnContainer>
    </div>
  );
};

export default Agradecimiento;
