import { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { FadeIn, FadeOut } from './animation'
import { useQuestionState } from '../context'

const MsgBasic = () => {
  return (
    <>
      <span>Thank you for taking this self-evaluation questionnaire.</span>
      <p>
        Regarding the inclusion of the gender perspective in your teaching, your
        level is <b>BASIC</b>. This self-evaluation is a great first step! You
        can{' '}
        <b>
          improve by incorporating in your classes resources and concepts that
          contribute to reducing gender bias and educate empowered scientists
        </b>
        . Try to devote time specifically to look for female researchers whose
        work can be highlighted in your courses and include at least one concept
        coined by women in your classes. You can use their full name when
        referring to their work in your presentations or in your reference list.
        You should be aware that considering the composition of your class,
        fostering participation of the diversity of students and changing your
        evaluation practices will improve the quality of your teaching.
      </p>
      <p>
        We recommend you to start by further understanding how gender-fairness
        in teaching can positively impact science and society. Take a look at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://eige.europa.eu/thesaurus/overview"
        >
          this
        </a>{' '}
        excellent glossary and content from the EIGI. Moreover, we have prepared
        a set of freely available slides “
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/her-research-in-your-lecture.html"
        >
          Her Research in Your Lecture
        </a>
        ” illustrating the research of scientific women, with special emphasis
        on freshwater-related sciences. Use them to improve your lectures and be
        more gender fair in your courses! If you are looking for general
        guidance on gender equity and gender- fair practices, you can find
        inspiration and presentations ready to be used in our “
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/women-in-science.html"
        >
          Women in Science
        </a>
        ” section.
      </p>
      <p>
        Would you like to get information about the results of this project and
        other activities and studies carried out by the Gender & Science AIL
        Group? Please, follow this{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/contact.html"
        >
          link
        </a>{' '}
        and subscribe to our updates (we send less than an e-mail per month).
        You can also follow us on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/genderail"
        >
          Twitter
        </a>
        . If you have any suggestion about the questionnaire, you may contact{' '}
        <a href="mailto:genderscienceail@gmail.com">
          genderscienceail@gmail.com
        </a>
      </p>
      <p>
        Help us to secure gender-fair teaching in University-level courses by
        spreading the word of Gender LimnoEdu among your colleagues. We need to
        keep pushing together towards gender equity!
      </p>
    </>
  )
}

const MsgIntermediate = () => {
  return (
    <>
      <span>Thank you for taking this self-evaluation questionnaire.</span>
      <p>
        You are certainly on the right path, but it’s time to move one step
        further. Your level regarding the inclusion of the gender perspective in
        your teaching is <b>INTERMEDIATE</b>. We can give you some tips and
        additional resources and concepts to get to the next level. Devote some
        time to{' '}
        <b>
          look for female researchers whose work can be highlighted in your
          courses
        </b>
        , and include some concepts coined by women in your classes. You can
        contribute to further visualize the scientific contributions of women by
        providing her full names in the reference list as well as in your
        presentations. Pay more attention to gender diversity in your class,
        identify potential differences in participation, and develop strategies
        to foster the participation of all the students and avoid gender bias
        during their evaluation.
      </p>
      <p>
        Take a look at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://eige.europa.eu/thesaurus/overview"
        >
          this
        </a>{' '}
        excellent glossary and content from the EIGI. Moreover, we have prepared
        a set of freely available slides “
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/her-research-in-your-lecture.html"
        >
          Her Research in Your Lecture
        </a>
        ” illustrating the research of scientific women, with special emphasis
        on freshwater-related sciences. Use them to improve your lectures and be
        more gender fair in your courses! If you are looking for general
        guidance on gender equity and gender- fair practices, you can find
        inspiration and presentations ready to be used in our “
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/women-in-science.html"
        >
          Women in Science
        </a>
        ” section.
      </p>
      <p>
        Would you like to get information about the results of this project and
        other activities and studies carried out by the Gender & Science AIL
        Group? Please, follow this{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/contact.html"
        >
          link
        </a>{' '}
        and subscribe to our updates (we send less than an e-mail per month).
        You can also follow us on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/genderail"
        >
          Twitter
        </a>
        . If you have any suggestion about the questionnaire, you may contact{' '}
        <a href="mailto:genderscienceail@gmail.com">
          genderscienceail@gmail.com
        </a>
      </p>
      <p>
        Help us to secure gender-fair teaching in University-level courses by
        spreading the word of Gender LimnoEdu among your colleagues. We need to
        keep pushing together towards gender equity!
      </p>
    </>
  )
}

const MsgAdvance = () => {
  return (
    <>
      <span>Thank you for taking this self-evaluation questionnaire.</span>
      <p>
        Congratulations! You are already working for the inclusion of the gender
        perspective on your teaching. Your level is <b>ADVANCED</b>. You are
        aware of the existence of gender biases in academia, and contributing to
        the <b>visibility of female scientists and their work while teaching</b>
        . Moreover, you pay attention to the diversity of the students in your
        class, and promote the participation of the different genders. Great
        that you are using a{' '}
        <b>gender-fair evaluation system and gender neutral language</b>. Well
        done!
      </p>
      <p>
        There is always room to improve! Take a look at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://eige.europa.eu/thesaurus/overview"
        >
          this
        </a>{' '}
        excellent glossary and content from the EIGI. Moreover, we have prepared
        a set of freely available slides “
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/her-research-in-your-lecture.html"
        >
          Her Research in Your Lecture
        </a>
        ” illustrating the research of scientific women, with special emphasis
        on freshwater-related sciences. Use them to improve your lectures and be
        more gender fair in your courses! If you are looking for general
        guidance on gender equity and gender- fair practices, you can find
        inspiration and presentations ready to be used in our “
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/women-in-science.html"
        >
          Women in Science
        </a>
        ” section.
      </p>
      <p>
        Would you like to get information about the results of this project and
        other activities and studies carried out by the Gender & Science AIL
        Group? Please, follow this{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.genderlimno.org/contact.html"
        >
          link
        </a>{' '}
        and subscribe to our updates (we send less than an e-mail per month).
        You can also follow us on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/genderail"
        >
          Twitter
        </a>
        . If you have any suggestion about the questionnaire, you may contact{' '}
        <a href="mailto:genderscienceail@gmail.com">
          genderscienceail@gmail.com
        </a>
      </p>
      <p>
        Help us to secure gender-fair teaching in University-level courses by
        spreading the word of Gender LimnoEdu among your colleagues. We need to
        keep pushing together towards gender equity!
      </p>
    </>
  )
}
const TotalPointsMsg = () => {
  const { showAnimations, status, token } = useQuestionState()
  const [points, setPoints] = useState(undefined)
  const Animation = showAnimations ? FadeIn : FadeOut

  useEffect(() => {
    if (token) {
      const getTotalPoints = async () => {
        const { data } = await axios.get(
          'https://backend-ubbc.onrender.com/getTotalPoints',
          {
            headers: {
              Authorization: token,
            },
          }
        )

        setPoints(data.total_points)
      }

      getTotalPoints()
    }
  }, [token, status])

  if (status !== 'TotalPointsMsg') {
    return null
  }

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Animation>
          {/* <NewLineText text={msg} /> */}
          <Grid container item xs={12}>
            {points >= 483 && points <= 948 && <MsgBasic />}
            {points >= 949 && points <= 1568 && <MsgIntermediate />}
            {points >= 1569 && points <= 2035 && <MsgAdvance />}
            {/* <Grid item>
            <Link href="https://edu.gender4stem-project.eu/">Link1</Link>
          </Grid> */}
          </Grid>
        </Animation>
      </Grid>
    </Grid>
  )
}

export default TotalPointsMsg
