interface PageMetaProps {
    title: string;
    description: string
}

function PageMeta(props: PageMetaProps) {
    const { title, description } = props
    return (
        <div>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
        </div>
    )
}

export default PageMeta
