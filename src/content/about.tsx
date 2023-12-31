const quoteEnd = `<svg fill="#F36430" height="800px" width="800px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xml:space="preserve">
<g>
	<path d="M23,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1c-1.3,1.3-3,2.1-5,2.1c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9
		C28,11.2,25.8,9,23,9z"/>
	<path d="M9,9c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.7,0,1-0.1C8.7,20.2,7,21,5,21c-0.6,0-1,0.4-1,1s0.4,1,1,1c5,0,9-4,9-9
		C14,11.2,11.8,9,9,9z"/>
</g>
</svg>`;

const quoteStart = `<svg fill="#F36430" height="800px" width="800px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xml:space="preserve">
<g>
	<path d="M13,11c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5s-2.2-5-5-5c-0.3,0-0.7,0-1,0.1
		C9.3,11.8,11,11,13,11z"/>
	<path d="M23,13c-0.3,0-0.7,0-1,0.1c1.3-1.3,3-2.1,5-2.1c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5
		S25.8,13,23,13z"/>
</g>
</svg>`;

export const ABOUT = {
  banner: "/about-banner.png",
  content: (
    <>
      <img
        className="inline-block relative bottom-3 right-1"
        src={`data:image/svg+xml;utf-8,${encodeURIComponent(quoteStart)}`}
        width="25px"
        height="25px"
      />
      <span className="text-white font-medium text-2xl">
        The <span className="text-primary">goal</span> is to provide a roadmap
        for <span className="text-primary">success in IT</span> and help first
        year undergraduates to plantheir next 3-4 years in university life while
        <span className="text-primary"> fostering connections</span> among
        universities
      </span>
      <img
        className="inline-block relative bottom-3 left-1"
        src={`data:image/svg+xml;utf-8,${encodeURIComponent(quoteEnd)}`}
        width="25px"
        height="25px"
      />
      <br />
      <br />
      <span className="relative top-2">
        90% of the 1st year IT undergraduates do not have an idea about the IT
        industry. Most of them certainly don’t have an idea about where they
        want to go. Most just flows with the degree program.
        <br />
        <br />
        What if 1st year students had an aim of where they want to go ? What if
        they kept working towards that aim for the next 3 - 4 years ? How much
        better will they be at the end of the 3rd / 4th year?
        <br />
        <br />
        We can give them a glimpse into the future, what each domain looks like,
        what arethe major job roles, what to do in those roles using some real
        world cases, what arethe skills needed to excel in that and how to
        develop them in the next 3 / 4 years..
      </span>
    </>
  ),
};
