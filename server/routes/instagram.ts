import {sendRedirect} from 'h3'

export default defineEventHandler((event) => sendRedirect(event, "https://www.instagram.com/yaboielina/"))
