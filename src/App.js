import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import FooterContact from './FooterContact'
import FooterLegal from './FooterLegal'
import Header from './Header'
import MenuDrawer from './MenuDrawer'
import React, { useEffect, useRef, useState } from 'react'
import Texture from './Texture'
import Welcome from './Welcome'

const baseUrl = 'https://fsr.admin.ucla.edu/'

const content = [
  {
    id: 1,
    menuItem: false,
    target: 'window',
    title: 'Request',
    url: baseUrl + 'fsr_plsql/fsr_start'
  },
  {
    id: 2,
    menuItem: true,
    target: 'window',
    title: 'Guidelines',
    url: baseUrl + 'fsr2_guide.html'
  },
  {
    id: 3,
    menuItem: true,
    target: 'window',
    title: 'Instructions',
    url: baseUrl + 'fsr2_instruct.html'
  },
  {
    id: 4,
    menuItem: true,
    target: 'iframe',
    title: 'Advanced Search',
    url: baseUrl + 'fsr_plsql/pkg_fsrsrch.showParams?i_url_action=pkg_fsrview.req_director&i_action_target=body&i_stylesheet=advsrch_style.css'
  },
  {
    id: 5,
    menuItem: false,
    target: 'iframe',
    title: 'Quick Search',
    url: baseUrl + 'fsr_plsql/pkg_fsrview.req_director'
  },
  {
    id: 6,
    menuItem: false,
    target: 'iframe',
    title: 'Client Approval',
    url: baseUrl + 'fsr_plsql/pkg_fsrview.req_director?'
  },
  {
    id: 7,
    menuItem: false,
    target: 'iframe',
    title: 'Customer Survey',
    url: baseUrl + 'fsr_plsql/pkg_fsrview.req_director?'
  },
  {
    id: 8,
    menuItem: false,
    target: 'iframe',
    title: 'Customer Information',
    url: baseUrl + 'fsr_plsql/pkg_fsrview.req_director?'
  }
]

const useStyles = makeStyles(theme => ({
  backButton: {
    backgroundColor: '#FFB81C',
    color: 'black',
    marginBottom: 32,
    marginTop: 8
  },
  container: {
    maxWidth: '1400px',
    paddingBottom: 64,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    position: 'relative',
    width: '90%',
    [theme.breakpoints.down('md')]: {
      margin: '50px auto 0 auto'
    },
    [theme.breakpoints.up('md')]: {
      margin: '108px auto 0 auto'
    }
  },
  footerContactContainer: {
    background: 'linear-gradient(#000000 10px, #333333 200px)'
  },
  maximoContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    marginLeft: 0,
    paddingLeft: 16,
    width: 800
  }
}))

function App () {
  const classes = useStyles()
  const [openMenu, _setOpenMenu] = useState(false)
  const [url, _setUrl] = useState(null)
  const [showBack, _setShowBack] = useState(false)
  const [iKey, _setIKey] = useState(null)
  const [iV2encrypt, _setIV2encrypt] = useState(null)
  const [iSurveyKey, _setISurveyKey] = useState(null)
  const [iCustnbr, _setICustnbr] = useState(null)

  const setFrameContent = (obj) => {
    _setUrl(obj.url)
  }

  const setOpenMenu = (val) => {
    _setOpenMenu(val)
  }

  const setShowBack = (val) => {
    _setShowBack(val)
  }

  const handleBack = () => {
    _setUrl(content[0].url)
    _setShowBack(false)
    document.getElementById('maxframe').src += ''
    const form = document.getElementById('maxsrch')
    if (form) {
      form.reset()
    }
  }

  document.domain = 'fsr.admin.ucla.edu'

  const iframe = useRef()

  const resizeIframe = () => {
    if (iframe) {
      const maxFrame = document.getElementById('maxframe')
      maxFrame.height = 0
      try {
        let h = maxFrame.contentWindow.document.body.scrollHeight
        if (h === 0) {
          h = 600
        }
        maxFrame.height = h
      } catch (error) {
        maxFrame.height = 1744
        console.log(error)
      }
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    _setIKey(urlParams.get('i_key'))
    _setIV2encrypt(urlParams.get('i_v2encrypt'))
    _setISurveyKey(urlParams.get('i_survey_key'))
    _setICustnbr(urlParams.get('i_custnbr'))
  }, [])

  useEffect(() => {
    let url
    let ctntObj = content[0]
    if (iKey && iV2encrypt) {
      ctntObj = content[5]
      url = ctntObj.url + 'i_key=' + iKey + '&i_v2encrypt=' + iV2encrypt
      ctntObj.url = url
    } else if (iSurveyKey) {
      ctntObj = content[6]
      url = ctntObj.url + 'i_survey_key=' + iSurveyKey
      ctntObj.url = url
    } else if (iCustnbr) {
      ctntObj = content[6]
      url = ctntObj.url + 'i_custnbr=' + iCustnbr
      ctntObj.url = url
    } else {
      setFrameContent(content[0])
    }
    setFrameContent(ctntObj)
  }, [iKey, iV2encrypt, iSurveyKey, iCustnbr])

  return (
    <>
      <Header
        content={content}
        setFrameContent={setFrameContent}
        setOpenMenu={setOpenMenu}
        setShowBack={setShowBack}
      />
      <div className={classes.container}>
        <Welcome />
        {showBack &&
          <Button
            classes={{ root: classes.backButton }}
            color="primary"
            onClick={handleBack}
            size="small"
            startIcon={<ArrowBackIcon/>}
            variant="contained"
          >Back</Button>
        }
        <Box
          boxShadow={3}
          classes={{ root: classes.maximoContainer }}
        >
          {url &&
            <iframe
              id="maxframe"
              name="maxframe"
              onLoad={resizeIframe}
              ref={iframe}
              src={url}
              style={{
                border: 0,
                width: '100%'
              }}
              title="Service Request Form"
            ></iframe>
          }
        </Box>
      </div>
      <MenuDrawer
        content={content}
        openMenu={openMenu}
        setFrameContent={setFrameContent}
        setOpenMenu={setOpenMenu}
        setShowBack={setShowBack}
      />
      <div className={classes.footerContactContainer}>
        <FooterContact />
      </div>
      <FooterLegal />
      <Texture />
    </>
  )
}

export default App
