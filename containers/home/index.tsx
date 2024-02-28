"use client";

import React, { Suspense, lazy } from 'react';
import { useRecoilValue } from 'recoil';
import { nomineeDayValue } from '@/states/Schedule/atom';
import { usePostSchedule } from '@/hooks/schedule/useSchedule';
import useCheckForm from '@/hooks/util/useCheckForm';
import Loading from '@/components/Loading';

const Header = lazy(() => import('@/components/Header'));
const DayPicker = lazy(() => import('@/components/Picker/DayPicker'));
const TimePicker = lazy(() => import('@/components/Picker/TimePicker'));
const PlacePicker = lazy(() => import('@/components/Picker/PlacePicker'));
const Button = lazy(() => import('@/components/Button'));

const HomeContainer = () => {
  const dateRange = useRecoilValue(nomineeDayValue);
  const {
    scheduleName,
    schedulePlace,
    nomineePlaytime,
    filterDateRange,
    selectDays,
    formStatus,
  } = useCheckForm({ dateRange: dateRange });
  const { mutate, isPending } = usePostSchedule(
    filterDateRange,
    nomineePlaytime,
    scheduleName,
    schedulePlace,
    selectDays
  );

  const handlePostScheduleClick = () => {
    if (formStatus === true) {
      mutate();
    } else {
      alert(formStatus);
    }
  };

  return (
    <>
      <main className="container-main-layout flex-col-center">
        <Suspense fallback={<Loading text="Loading..." />}>
          <Header />
          <DayPicker />
          <TimePicker />
          <PlacePicker />
          <Button
            className="button-confirm card-layout centered-button"
            onClick={handlePostScheduleClick}
          >
            등록하기
          </Button>
        </Suspense>
        {isPending ? <Loading text="일정이 만들어지고 있습니다." /> : ''}
      </main>
    </>
  );
};

export default HomeContainer;
