/**   
 * api接口统一管理
 */
import { get, post } from './https'

export const apiBanner = p => post('/admin/banner/getbannerlist', p);
export const apiBook = p => post('/admin/book/getbooklist', p);