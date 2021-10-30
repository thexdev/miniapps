import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let birthday = dayjs(req.query.birthday as string);
  let sign, month: string;
  let day: number;

  month = birthday.format('MMMM').toLowerCase();
  day = birthday.date();

  if (month == 'december') {
    if (day < 22) sign = 'Sagittarius';
    else sign = 'Capricorn';
  } else if (month == 'january') {
    if (day < 20) sign = 'Capricorn';
    else sign = 'Aquarius';
  } else if (month == 'february') {
    if (day < 19) sign = 'Aquarius';
    else sign = 'Pisces';
  } else if (month == 'march') {
    if (day < 21) sign = 'Pisces';
    else sign = 'Aries';
  } else if (month == 'april') {
    if (day < 20) sign = 'Aries';
    else sign = 'Taurus';
  } else if (month == 'may') {
    if (day < 21) sign = 'Taurus';
    else sign = 'Gemini';
  } else if (month == 'june') {
    if (day < 21) sign = 'Gemini';
    else sign = 'Cancer';
  } else if (month == 'july') {
    if (day < 23) sign = 'Cancer';
    else sign = 'Leo';
  } else if (month == 'august') {
    if (day < 23) sign = 'Leo';
    else sign = 'Virgo';
  } else if (month == 'september') {
    if (day < 23) sign = 'Virgo';
    else sign = 'Libra';
  } else if (month == 'october') {
    if (day < 23) sign = 'Libra';
    else sign = 'Scorpio';
  } else if (month == 'november') {
    if (day < 22) sign = 'Scorpio';
    else sign = 'Sagittarius';
  }

  return res.json({ sign });
}
