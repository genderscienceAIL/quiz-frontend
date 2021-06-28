import Grid from '@material-ui/core/Grid'
import { FadeIn, FadeOut } from './animation'
import { useQuestionState } from '../context'

const msg = () => {
  return (
    <>
      <span>
        Thank you for considering participating in this study. We encourage you
        to come back and respond to the questionnaire later.
      </span>
      <p>
        The lack of female role models and the persistent use of gendered and
        stereotyped language holds female students back from pursuing a career
        in scientific disciplines, and also slows down women in academia.
        Including female role models in your classes is not just fair, but also
        encourages young female students to pursue professional careers in
        scientific related fields. We have prepared a set of freely available
        slides "
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/her-research-in-your-lecture.html"
        >
          Her Research in Your Lecture
        </a>
        " illustrating the research of scientific women, with special emphasis
        on freshwater-related sciences. Feel free to use this teaching material
        to improve your lectures and be more gender fair in your courses. If you
        need some general guidance on gender equity and gender-fair practices,
        you can find inspiration and presentations ready to be used in our{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/women-in-science.html"
        >
          "Women in Science”
        </a>{' '}
        section.
      </p>
      <p>
        Help us to secure gender-fair teaching in University-level courses by
        spreading the word of Gender LimnoEdu among your colleagues. We need to
        keep pushing together towards gender equity!
      </p>
    </>
  )
}

const NoConsentMsg = () => {
  const { showAnimations, status } = useQuestionState()
  const Animation = showAnimations ? FadeIn : FadeOut

  if (status !== 'NoConsentMsg') {
    return null
  }

  return (
    <Grid container item>
      <Animation>{msg()}</Animation>
    </Grid>
  )
}

export default NoConsentMsg
