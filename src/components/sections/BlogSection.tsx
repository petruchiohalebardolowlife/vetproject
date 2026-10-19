import { blog } from '../../data/sections'
import { socials } from '../../data/socials'
import Reveal from '../Reveal'
import PawIcon from '../PawIcon'
import SectionHead from './SectionHead'

const telegram = socials.find((s) => s.id === 'telegram')

export default function BlogSection() {
  return (
    <section id="blog" className="section" aria-labelledby="blog-title">
      <div className="container">
        <SectionHead
          id="blog-title"
          eyebrow="03 — Блог"
          title={blog.title}
          lead={blog.lead}
          aside={
            telegram && (
              <a className="btn btn--outline" href={telegram.url} target="_blank" rel="noopener noreferrer">
                {blog.allLabel}
              </a>
            )
          }
        />

        <ul className="posts">
          {blog.posts.map((post, i) => (
            <Reveal as="li" key={post.title} delay={i * 110} className={`post post--${i + 1}`}>
              <article className="post__inner">
                <div className="post__cover" aria-hidden="true">
                  <PawIcon className="post__paw" />
                  <span className="post__tag">{post.tag}</span>
                </div>
                <div className="post__body">
                  <time className="post__date">{post.date}</time>
                  <h3 className="post__title">{post.title}</h3>
                  <p className="post__text">{post.text}</p>
                  {/* TODO: ссылка на статью, когда появятся материалы */}
                  <button type="button" className="post__more">
                    Читать
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
