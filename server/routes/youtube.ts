import {sendRedirect} from 'h3'

export default defineEventHandler((event) => sendRedirect(event, "https://www.youtube.com/channel/UCZBRLTVr1ZITpLsRGC-saGA"))
