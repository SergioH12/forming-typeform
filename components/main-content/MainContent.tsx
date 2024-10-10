import { useSharedStates } from "@/contexts";
import { useHandleKeypress, useHandleScroll } from "@/hooks";
import { useEffect } from "react";
import { Question } from "../index";

export function MainContent() {
  const { questionNum, setShowIndustriesList } = useSharedStates();
  const { prev, now } = questionNum;

  useHandleKeypress();
  useHandleScroll();


// // Función para enviar los datos una vez completados
// const handleSubmit = async () => {
//   try {
//     const response = await fetch("/api/hello", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         nombre: personaState.firstName,
//         apellido: personaState.lastName,
//         sexo: personaState.sexo,
//         compania: personaState.compania,
//         edad: personaState.edad,
//         tecnologias: personaState.tecnologias,
//         correo: personaState.correo,
//         fechaCumpleanos: personaState.fechaCumpleanos,
//         puntuacion: personaState.puntuacion,
//       }),
//     });

//     const data = await response.json();
//     console.log("Respuesta del servidor:", data);
//   } catch (error) {
//     console.error("Error al enviar los datos:", error);
//   }
// };


  useEffect(() => {
    function handleClick() {
      setShowIndustriesList(false);
    }
// // Este useEffect podría usarse para detectar cuando el usuario ha completado las preguntas
// useEffect(() => {
//   if (now === 8) {
//     handleSubmit(); // Enviar datos cuando se llega al final de las preguntas
//   }
// }, [now]);
    document.addEventListener("click", handleClick);

    return function () {
      document.removeEventListener("click", handleClick);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div>
        <Question
          type="intro"
          outView={now - 1 === 0 || now > 1}
          outViewSlide="up"
          inView={now === 0}
          inViewSlide={prev === 1 ? "down" : ""}
          isRendered={prev === null}
        />

        {[0, 2].includes(prev ?? -1) && [now - 1, now, now + 1].includes(1) && (
          <Question
            type="firstName"
            outView={[now - 1, now + 1].includes(1)}
            outViewSlide={now - 1 === 1 ? "up" : "down"}
            inView={now === 1}
            inViewSlide={prev === 2 ? "down" : "up"}
          />
        )}

        {[1, 3].includes(prev ?? 0) && [now - 1, now, now + 1].includes(2) && (
          <Question
            type="lastName"
            outView={[now - 1, now + 1].includes(2)}
            outViewSlide={now - 1 === 2 ? "up" : "down"}
            inView={now === 2}
            inViewSlide={prev === 3 ? "down" : "up"}
          />
        )}

        {[2, 4].includes(prev ?? 0) && [now - 1, now, now + 1].includes(3) && (
          <Question
            type="industry"
            outView={[now - 1, now + 1].includes(3)}
            outViewSlide={now - 1 === 3 ? "up" : "down"}
            inView={now === 3}
            inViewSlide={prev === 4 ? "down" : "up"}
          />
        )}

        {[3, 5].includes(prev ?? 0) && [now - 1, now, now + 1].includes(4) && (
          <Question
            type="role"
            outView={[now - 1, now + 1].includes(4)}
            outViewSlide={now - 1 === 4 ? "up" : "down"}
            inView={now === 4}
            inViewSlide={prev === 5 ? "down" : "up"}
          />
        )}

        {[4, 6].includes(prev ?? 0) && [now - 1, now, now + 1].includes(5) && (
          <Question
            type="goal"
            outView={[now - 1, now + 1].includes(5)}
            outViewSlide={now - 1 === 5 ? "up" : "down"}
            inView={now === 5}
            inViewSlide={prev === 6 ? "down" : "up"}
          />
        )}

        {prev === 5 && [now - 1, now, now + 1].includes(6) && (
          <Question
            type="email"
            outView={[now - 1, now + 1].includes(6)}
            outViewSlide={now - 1 === 6 ? "up" : "down"}
            inView={now === 6}
            inViewSlide={prev === 5 ? "down" : "up"}
          />
        )}

        {prev === 6 && [now - 1, now, now + 1].includes(7) && (
          <Question
            type="age"
            outView={[now - 1, now + 1].includes(7)}
            outViewSlide={now - 1 === 7 ? "up" : "down"}
            inView={now === 7}
            inViewSlide={prev === 6 ? "down" : "up"}
          />
        )}

        {prev === 7 && [now - 1, now, now + 1].includes(8) && (
          <Question
            type="date"
            outView={[now - 1, now + 1].includes(8)}
            outViewSlide={now - 1 === 8 ? "up" : "down"}
            inView={now === 8}
            inViewSlide={"up"}
          />
        )}
      </div>
    </section>
  );
}
