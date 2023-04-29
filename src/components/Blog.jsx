import Container from './Container';
import ButtonLink from './ButtonLink';
import blog from 'images/blog/blog.jpg';
import blogWebP from 'images/blog/blog.webp';
import blog2x from 'images/blog/blog@2x.jpg';
import blogWebP2x from 'images/blog/blog@2x.webp';

const Blog = () => {
  return (
    <section id="blog" className="section section_blog section--right-image">
      <Container>
        <div className="section_wrap">
          <h3 className="section_description">April 16 2020</h3>
          <h2 className="section_title">Blog Post One</h2>
          <p className="section_information">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <ButtonLink
            className="button--transparent-color"
            href=""
            title="Read Our Blog"
          >
            Read Our Blog
          </ButtonLink>
        </div>
        <picture className="section_image">
          <source
            srcSet={`${blogWebP} 1x, ${blogWebP2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${blog} 1x, ${blog2x} 2x`} type="image/jpeg" />
          <img src={blog} alt="people" />
        </picture>
      </Container>
    </section>
  );
};

export default Blog;
