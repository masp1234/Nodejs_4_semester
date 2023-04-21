import { read } from 'fs'
import {readable }  from 'svelte/store'

export const BASE_URL = readable ("localhost:8080")