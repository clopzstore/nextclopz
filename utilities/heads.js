import Head from 'next/head'; 
export default function Headder({
	title = 'kumag situs ajib',
	description ='',
	canonicalUrl ='',
	ogType,
	ogImgUrl = '',
	structuredData,
	children
}) {
 
  return (
	<Head>
    	{/*
        	Fundamental head elements.
    	*/}
    	<title>{ title } </title>
    	<meta name="description" content={description} />
    	<link rel="canonical" href={canonicalUrl} />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
 
    	<script
            type="application/ld+json"
        	dangerouslySetInnerHTML={{__html: structuredData}}
        	key="item-jsonld"
    	/>
    	{ children }
	</Head>
  )
}