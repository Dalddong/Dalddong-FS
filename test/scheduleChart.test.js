import { describe, expect } from "vitest";
import {findMostTimeAvailable} from '@/utils/functions/findMostTimeAvailable'
import {hollowArray,top1Array,top2Array,top3Array} from './chartTestArrays.js'

describe('schedule 차트 계산 test', () => {
    it('hollow data',()=>{
        const result =findMostTimeAvailable(hollowArray)
        expect(result).toEqual([["1st Data..."],["2nd Data..."],["3rd Data..."]])
    })

    it('1등까지 있는 data',()=>{
        const result =findMostTimeAvailable(top1Array)
        expect(result).toEqual([["02/19 9:00"],["2nd Data..."],["3rd Data..."]])
    })
    it('2등까지 있는 data',()=>{
        const result =findMostTimeAvailable(top2Array)
        expect(result).toEqual([["02/20 9:00"],["02/19 9:00"],["3rd Data..."]])
    })
    it('3등까지 있는 data',()=>{
        const result =findMostTimeAvailable(top3Array)
        expect(result).toEqual([["02/20 9:00",],["02/21 10:00"],["02/19 9:00","02/19 10:00"]])
    })
  })