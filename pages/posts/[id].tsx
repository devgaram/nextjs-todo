import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
// import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

/**
 * pages/posts/[...id].js matches 
 * /posts/a, but also /posts/a/b, /posts/a/b/c and so on.

 * id: ['a', 'b', 'c'] --> /posts/a/b/c params.id 는 배열
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    /**
     * fallback
     * false 면 없는 path면 404 페이지 리턴
     * 미리 렌더링할 페이지 수가 적을 때와 새 페이지를 추가할 일이 적을 때 사용하면 좋다.
     * 새 페이지 추가하려면 빌드를 다시 해야함
     * true
     * 빌드 타임에 404페이지 생성 안함.
     * 빌드 타임에 생성된 path가 아니면 fallback version 페이지를 생성하고
     * nextjs는 그 요청에 따른 html, json 페이지를 생성한다.
     * 페이지 완성이 다 되면 fallack 페이지 에서 이동
     * pre-render 페이지ㅣ 리스트에 해당 페이지 추가
     * 그 후속 요청은 이 때 만든 페이지를 서빙한다.
     * 얘는 많은 수의 페이지를 만들어야할 때 유용하다.
     * 일부만 미리 페이지를 생성해놓고 나머지는 요청이 들어올때 생성하는 방식
     */
    fallback: false, // false면 없는 path일 때 404 페이지 리턴
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};

interface PostProps {
  postData: PostData;
}

function Post({ postData }: PostProps) {
  // fallback: true 일 때
  // const router = useRouter();

  // if (router.isFallback) return <div>Loading...</div>;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export default Post;
