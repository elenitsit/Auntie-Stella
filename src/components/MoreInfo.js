import React from "react";
import Typography from "@material-ui/core/Typography";


class MoreInfo extends React.Component  {
  render() {
    return(
    <div className="more-container">
    <Typography variant="title" align="center">
              About Auntie Stella
             </Typography>


                       <Typography
                         variant="button"
                         align="left"
                         style={{ padding: "5px", fontSize: "16px" }}
                       >
                         Q: What is ‘Auntie Stella’?
                       </Typography>
                       <Typography
                         variant="body1"
                         paragraph={true}
                         style={{ padding: "5px", fontSize: "16px" }}
                       >
                         A:   The ‘Auntie Stella’ website is a place where you can read young people’s letters to Auntie Stella, like the ’agony aunt’ pages you find in many magazines. There are 40 letters – all drawing on the experiences and stories of young people in southern and east Africa. The letters, and Auntie Stella’s replies, deal with all kinds of personal, emotional, and social issues that affect young women and men’s lives and sexual health and their relationships with partners, family, peers and society.

                           And these letters aren’t just something to read – what’s really important is what YOU discuss and do as you use them. Each letter and reply has activities to help you talk about your own lives, look at your options, work together and get the skills and support you need. They’re fun too. You can get off the computer and do a whole variety of things - roleplays and quizzes, debates and interviews, songs and stories to write, maps and diagrams to make. You can also find out what’s happening in your communities, and make plans to get involved.
                       </Typography>
                       <br />

                       <Typography
                         variant="button"
                         align="left"
                         style={{ padding: "5px", fontSize: "16px" }}
                       >
                         Q: So, where do we start??
                       </Typography>
                       <Typography
                         variant="body1"
                         paragraph={true}
                         style={{ padding: "5px", fontSize: "16px" }}
                       >
                         A:  Right here. Find out how you can use ‘Auntie Stella’ and the questions young people are writing about.

                         And don’t forget! You can also get ‘Auntie Stella’ as a printed pack that’s great to use with big or small groups. It’s available in several languages. For information, click here.

                         Acknowledgements: Our deepest thanks to the many organisations and individuals – both young and not so young – who helped in the making of ‘Auntie Stella’. In particular, TARSC acknowledges our many partners and the organisations we link with in the southern and east African region and around the world.

                       </Typography>
                       <br />








</div>)

}}
export default MoreInfo;
