'use strict';

exports.main = async (event, context) => {
  console.log('[univerify-phone] event received', {
    hasAccessToken: !!(event.access_token || event.accessToken),
    hasOpenid: !!(event.openid || event.openId),
    appid: context.APPID,
  })

  const accessToken = event.access_token || event.accessToken;
  const openid = event.openid || event.openId;

  if (!accessToken || !openid) {
    return {
      code: 400,
      message: 'missing access_token or openid',
    };
  }

  const result = await uniCloud.getPhoneNumber({
    provider: 'univerify',
    appid: context.APPID,
    access_token: accessToken,
    openid,
  });

  console.log('[univerify-phone] getPhoneNumber result', result)

  if (!result || result.code !== 0 || !result.phoneNumber) {
    return {
      code: result && result.code ? result.code : 500,
      message: result && result.message ? result.message : 'get phone number failed',
    };
  }

  return {
    code: 0,
    message: 'ok',
    phoneNumber: result.phoneNumber,
  };
};
