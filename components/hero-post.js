import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-4 md:mb-6">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-8 md:mb-16 px-5 sm:px-0">
        <div>
          <h3 className="mb-1 text-3xl lg:text-6xl leading-tight font-script">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>          
          <div className="mb-4 md:mb-0 text-sm">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </section>
  )
}
