import React, { useEffect } from 'react';
import "./digitalMarketing.css"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MarketingCategories from './categories/marketingCategorie';
import Clients from '../../../components/clients/clients';
import seo from "../../../assets/SEOimg2.png"
import smo from "../../../assets/images.png"
import { Link } from 'react-router-dom';
const DigitalMarketing = () => {
  useEffect(()=>{
    document.title='Best Digital Marketing Services';
  },[]);
  return (
    <div className="Digital-Marketing-page">
   
      <div className="breadcrumb-container">
        <div className="breadcrumb-heading">
          <Typography variant="h1">Best Digital Marketing Services</Typography>
        </div>
        <div className="breadcrumb-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{fontSize:"15px"}}>
            <strong>Home</strong>
          </Link>
          <Typography color="textPrimary" style={{fontSize:"13px"}}>Digital Marketing Services</Typography>
        </Breadcrumbs>
        </div>

      </div>

      <div className="Digital-Marketing-container">
        <h2>Professional digital marketing services that generate results</h2>
        <p>
       
            We are crackerjack of our field and we are proficient when it comes to web development and marketing aspects. 
            We’ve been providing superlative sort of digital marketing services in Pakistan.
            We know what is required to make your business a sensation and we have highly skillful team which can turn the table around as far as your business growth is concerned.
            SEO technique is something which is essential to make a brand grow and we have SEO specialist from all over Pakistan.
            We will help you, thus, to achieve commercial success through conversations with Internet users. Only in this way will you seduce even the most skeptical of your targets. 
            It is all the magic of digital marketing, and it is also our know-how.
            Our digital marketing services agency aims to help companies develop their activities through the internet. This is why we offer website creation services,
             account management on social networks, computer graphics, web referencing, traffic acquisition, internet advertising, digital strategy and support.
            In fact, more than 80% of the world's population is connected to the Internet. It is for this purpose that we help and support SMEs in their digital transformation.
             In addition, our services aim to increase your visibility, improve your reputation and increase your turnover.
        </p>
        
      
      </div>
        <div className="seo-container">
        <div className="seo-content">
          <div className="seo-Text-container">
            <h2>Search Engine Optimization (SEO)</h2>
            <p>
            It is a technique that can boost your business at will and through our SEO specialists, you can make your business a brand in a very short period of time.
             We are best SEO Company currently working in Pakistan and we’ll build your business and make it a big story through our search engine optimization technique. 
             We will make sure that message must get delivered to your target audience.
            </p>
          </div>
          {/* Second sub-container */}
          <div className="seo-Image-container">
            <img src={seo} alt="seo Image" />
          </div>
          </div>
        </div>

        <div className="smo-container">
        <div className="smo-Image-container">
                <img src={smo} alt="smo" />
              </div>
              <div className="smo-Text-container">
                <h2>Social Media Optimization (SMO)</h2>
                <p>
                Our social media marketing team requires no second introduction whatsoever. We have bunch of guys who are master of social media optimization and who have worked at international level.
                 Through astonishing communication skills and through substantial amount of experience, they’ll handle your social media marketing campaigns and you’ll be absolutely delighted to have us on board. 
                 We make sure to expand your network to get you more audience so you can expand your business and you can take your organization to next level within couple of months. Our promotion techniques
                  are handled by SMO specialist who is why we always get instant and required results. By making sure your campaign must reach target audience, we urge your target audience to
                   do whatever you want them to do to make yourself a class of your own. Simply we are your one stop solution for all marketing problem
                      </p>
              </div>
            
             
            </div>
            <MarketingCategories/>
            <div className="marketing-strategies">
                <div className="marketing-strategies-content">
                <h2>Digital Marketing Services: Paid SEO or SEA</h2>
                <p>
                    This is "Search Engine Advertising". This referencing is more akin to advertising.
                    Through campaigns, a company will pay to position itself on words or expressions. On Google, we will talk about Google AdWords. The difficulty: the relevance and design of these campaigns. They are billed in CPC (Cost per Click), CPM (Cost Part Thousand), CPL (Cost per Lead) or CPA (Cost per Action). It is therefore essential to deploy well-targeted campaigns to make them profitable.
                    SEA requires a good knowledge of the target market as well as a good knowledge of user behavior. Analyzing navigation data and AdWords campaigns can be very useful. They are preferred for immediate and punctual communication.
                </p>

                <h2>Web Analytics: data for digital marketing</h2>
                <p>
                    When a company has a website, it can analyze which acquisition channel it generates the most traffic. In digital, the navigation of Internet users is very volatile. Analysis of this data therefore makes it possible to better understand its audience and improve its customer relationship.
                    The use and analysis of navigation data makes it possible to draw up a portrait of the different profiles of customers interested in your brand or your company. These DATA are therefore precious because they allow more relevance in terms of digital communication.
                    Whether it is to validate a communication campaign, or to define a new one, data analysis is essential.
                    In the digital sector, this data is the most precious resource. Learn to interpret and use them to increase your audience. Through training, we will allow you to decrypt and use this data to refine your digital strategy and thus improve the visibility of your online site.
                </p>

                <h2>CONTENT DRAFTING</h2>
                <p>
                    Since 70% of buyers prefer to learn about a business through articles, it is essential to create well-written content. The same concept applies to your PPC ads because you have to give your target audience a reason to click.
                    This is why our range of digital marketing services includes writing packages.
                    We have an exceptional team of writers specializing in various business sectors. This allows you to get not only engaging but also informative content, which is essential when speaking to an experienced audience.
                    To find out more about our services and their results, visit our portfolio.
                </p>

                <h2>OPTIMIZATION OF THE CONVERSION RATE</h2>
                <p>
                    As the leading performance-based digital marketing agency, we understand the importance of results. That's why our digital marketing services also include Conversion Rate Optimization (CRO), which provides your business with concrete insights on how to improve your conversions.
                    As part of our comprehensive services, our team performs in-depth research on your industry. It also uses A / B testing to find out about potential changes to your website, such as design or text changes, that would encourage users to take the action you've planned, such as requesting a quote.
                    By optimizing your website for conversions, you improve your overall digital marketing strategy. This can lead to greater gains in your paid SEO campaign, as well as in your SEO strategy. This translates into more revenue for your business.
                </p>

                <h2>The best cases and strategies for building a brand in the digital age</h2>
                <p>
                    Digital Branding · Best Cases are two days of interactive communication and immersion in the world of modern communications.
                    Only Digital Branding · Best Cases provide an opportunity to get acquainted with the insights of the best campaigns in a unique presentation format - Client's Strategic Approach and Agency's Tactical Decision.
                    The Summit program includes the best world examples of brand promotion in new media, the integration of all communication channels, digital, social, and mobile technologies in marketing and advertising.
                    Presentations of leading brands, debates with opinion leaders, master classes by leading experts, an exhibition of digital technologies, entertainment, and platforms await you.
                </p>
                </div>
                </div>
                <div className="button-wrapper">
            <Link to="/request-quote" className='View-caseStudy'>
              <button className="view-case-study-button" >GET FREE QUOTE</button>
            </Link>
          </div>
          <Clients/>

    </div>
  );
};

export default DigitalMarketing;
