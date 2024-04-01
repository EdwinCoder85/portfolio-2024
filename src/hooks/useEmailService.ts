import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Definir el tipo de los datos del formulario
interface FormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

// Función personalizada para el servicio de email
const useEmailService = () => {
  // Obtener las funciones necesarias de react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // Referencia al formulario
  const formRef = useRef<HTMLFormElement>(null);

  // Función para enviar el email
  const sendEmail: SubmitHandler<FormData> = async (data) => {
    // Verificar si todos los campos del formulario están completos
    if (!data.user_name || !data.user_email || !data.subject || !data.message) {
      // Mostrar un mensaje de error si faltan campos
      Swal.fire({
        title: "Oops...",
        text: "Por favor, completa todos los campos antes de enviar el correo.",
        icon: "error",
      });
      return;
    }

    try {
      // Enviar el formulario usando EmailJS
      const result = await emailjs.sendForm(
        "service_gwvzj6p",
        "template_471xmqe",
        formRef.current as HTMLFormElement,
        "vzPKoRdij53R7Czmc"
      );
      console.log("Email enviado exitosamente:", result);
      
      // Reiniciar el formulario después de enviar el correo
      formRef.current?.reset();
      
      // Mostrar un mensaje de éxito
      Swal.fire({
        title: "¡Correo enviado con éxito!",
        text: "¡Pronto estaré en contacto!",
        icon: "success",
      });
    } catch (error) {
      // Manejar errores de envío de correo
      console.error("Error enviando correo:", error);
      Swal.fire({
        title: "Oops...",
        text: "Ha ocurrido un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.",
        icon: "error",
      });
    }
  };

  // Retornar las funciones y referencias necesarias
  return { register, handleSubmit, formRef, errors, sendEmail };
};

export default useEmailService;
