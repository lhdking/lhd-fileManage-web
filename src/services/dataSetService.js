import request from '@/utils/request';
import { stringify } from 'qs';

export async function queryTest(params) {
      console.info("到了Service树方法")
      return request('/api/catalogInfo/getByCatalogTree', {
            method: 'POST',
            body:params,
      });
  }