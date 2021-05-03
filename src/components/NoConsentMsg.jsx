import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { FadeIn, FadeOut } from './animation'
import { useQuestionState } from '../context'
import { NewLineText } from './common'

const msg =
  'Thank you for considering participating in this study. We encourage you to come back and respond to the questionnaire later.\n The lack of female role models and the persistent use of gendered and stereotyped language holds female students back from pursuing a career in scientific disciplines, and also slows down women in academia. Including female role models in your classes is not just fair, but also encourages young female students to pursue professional careers in scientific related fields. We have prepared a set of freely available slides "Her Research in Your Lecture" illustrating the research of scientific women, with special emphasis on freshwater-related sciences. Feel free to use this teaching material to improve your lectures and be more gender fair in your courses. If you need some general guidance on gender equity and gender-fair practices, you can find inspiration and presentations ready to be used in our “Women Limnology" section.\n Help us to secure gender-fair teaching in University-level courses by spreading the word of Gender LimnoEdu among your colleagues. We need to keep pushing together towards gender equity!\n'

const NoConsentMsg = () => {
  const { showAnimations, status } = useQuestionState()
  const Animation = showAnimations ? FadeIn : FadeOut

  if (status !== 'NoConsentMsg') {
    return null
  }

  return (
    <Grid item xs={12}>
      <Animation>
        <NewLineText text={msg} />
        <Grid container item xs={12} spacing={3}>
          <Grid item>
            <Link href="https://edu.gender4stem-project.eu/">Link1</Link>
          </Grid>
          <Grid item>
            <Link href="https://eige.europa.eu/thesaurus/overview/">Link2</Link>
          </Grid>
          <Grid item>
            <Link href="https://en.wikipedia.org/wiki/Matilda_effect">
              Link3
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://en.wikipedia.org/wiki/Glass_ceiling">
              Link4
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.femmesetsciences.fr/">Link5</Link>
          </Grid>
          <Grid item>
            <Link href="https://ec.europa.eu/info/publications/she-figures-2018_en">
              Link6
            </Link>
          </Grid>
        </Grid>
      </Animation>
    </Grid>
  )
}

export default NoConsentMsg
