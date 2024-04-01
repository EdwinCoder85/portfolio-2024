import { BiSave } from 'react-icons/bi';
import useEmailService from '../hooks/useEmailService';

export const ContactForm = () => {
  const { register, handleSubmit, formRef, errors, sendEmail } = useEmailService();

  return (
    <form ref={formRef} onSubmit={handleSubmit(sendEmail)}>
      <div className="mb-1 sm:mb-3 md:mb-4">
        <div className="grid grid-flow-row sm:grid-flow-col gap-3">
          <div className="sm:col-span-4 justify-center">
            <label
              className="block dark:text-yellow-500 text-primaryLight text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="fullname"
            >
              Nombres y Apellidos
            </label>
            <input
              {...register('user_name', {
                required: 'Este campo es requerido',
              })}
              className={`shadow bg-transparent appearance-none border-2 border-primaryLight dark:border-yellow-600 rounded w-full p-2 lg:p-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-blue-50 focus:dark:bg-yellow-50 focus:dark:text-gray-950 ${errors.user_name ? 'border-red-500 dark:border-red-500' : ''}`}
              type="text"
              placeholder="Carlos Torres"
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm">{errors.user_name.message}</p>
            )}
          </div>
          <div className="sm:col-span-4 justify-center">
            <label
              className="block dark:text-yellow-500 text-primaryLight text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register('user_email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Dirección de correo electrónico inválida',
                },
              })}
              className={`shadow bg-transparent appearance-none border-2 border-primaryLight dark:border-yellow-600 rounded w-full p-2 lg:p-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-blue-50 focus:dark:bg-yellow-50 focus:dark:text-gray-950  ${errors.user_email ? 'border-red-500 dark:border-red-500' : ''}`}
              type="email"
              placeholder="ctorres@mail.com"
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm">
                {errors.user_email.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-1 sm:mb-3 md:mb-4">
        <label
          className="block dark:text-yellow-500 text-primaryLight text-base lg:text-xl font-bold mb-2"
          htmlFor="subject"
        >
          Asunto
        </label>
        <input
          {...register('subject', {
            required: 'Este campo es requerido',
          })}
          className={`shadow bg-transparent appearance-none border-2 border-primaryLight dark:border-yellow-600 rounded w-full p-2 lg:p-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-blue-50 focus:dark:bg-yellow-50 focus:dark:text-gray-950  ${errors.subject ? 'border-red-500 dark:border-red-500' : ''}`}
          type="text"
          placeholder="Venta de Productos"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>
      <div className="mb-1 sm:mb-3 md:mb-4">
        <label
          className="block dark:text-yellow-500 text-primaryLight text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2"
          htmlFor="message"
        >
          Mensaje
        </label>
        <textarea
          {...register('message', {
            required: 'Este campo es requerido',
          })}
          className={`shadow bg-transparent appearance-none border-2 border-primaryLight dark:border-yellow-600 rounded w-full p-2 lg:p-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-blue-50 focus:dark:bg-yellow-50 focus:dark:text-gray-950  ${errors.message ? 'border-red-500 dark:border-red-500' : ''}`}
          rows={5}
          placeholder="El mensaje"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <div className="flex items-center justify-start">
        <button
          className="bg-gradient-to-r dark:from-primaryDark from-primaryLight from-0% dark:via-secondaryDark via-secondaryLight via-51% dark:to-primaryDark to-primaryLight to-100% hover:bg-blue-700 text-white p-2 sm:p-3 md:p-4 lg:p-5 shadow-md rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-bold cursor-pointer focus:outline-none focus:shadow-outline flex items-center"
          type="submit"
        >
          <BiSave className="icon mr-2" />
          <span className="align-middle">Aceptar</span>
        </button>
      </div>
    </form>
  );
};
