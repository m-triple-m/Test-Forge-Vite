import TeacherFormLinks from "./FormLinks";

export const generateStaticParams = async () => {
  const forms = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form/getall`).then((res) => res.json());
  console.log(forms.map(form => form._id));

  return forms.map((form) => ({
    id: form._id,
  }));
};

const FormLinksPage = ({ params }) => {
  const { id } = params;

  return <TeacherFormLinks id={id} />;
}

export default FormLinksPage;
