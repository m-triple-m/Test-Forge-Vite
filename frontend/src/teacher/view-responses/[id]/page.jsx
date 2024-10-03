import ResponseViewPage from "./ViewResponses";


export const generateStaticParams = async () => {
  const entries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/response/getall`).then((res) => res.json());
  console.log(entries.map(entry => entry._id));

  return entries.map((entry) => ({
    id: entry._id,
  }));
};

const ViewResponsesPage = ({ params }) => {
  const { id } = params;

  return <ResponseViewPage formId={id} />;
}

export default ViewResponsesPage;
