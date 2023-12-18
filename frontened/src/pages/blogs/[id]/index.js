import { PortableText } from "@portabletext/react";
import client from '@/sanity/client';

const BlogsContent = ({ content }) => {
  return (
    <section className="container px-4 mx-auto">
      <div>
        <div className="font-[light]">
          {content ? <PortableText value={content} /> : <p>No content available.</p>}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await client.fetch(`*[_type == "blogsdata" && slug.current == "${id}"]{content}`);
  console.log('blogsdata:', res);

  return {
    props: {
      content: res[0]?.content || null, // Use optional chaining to handle undefined
    },
  };
}

export default BlogsContent;

