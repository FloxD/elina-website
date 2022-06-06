import {sendRedirect} from 'h3'

export default defineEventHandler((event) => sendRedirect(event, "https://store.streamelements.com/elina"))
