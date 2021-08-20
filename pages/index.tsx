/**
 * @template PageComponent
 */

import { useCallback, useState } from 'react';
import NextLink from 'next/link';

import { useUI } from '@components/context';
import { Button } from '@components/ui';
import { fetcher } from '@lib/fetcher';

export class Statistics {
  /**
   * Returns the average of two numbers.
   *
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */
  public static getAverage(x: number, y: number): number {
    return (x + y) / 2.0;
  }
}

export default function IndexPage() {
  const { showModal, closeModal, showNoti } = useUI();
  const [result, setResult] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFile = useCallback(() => {
    if (!file) return;

    const textReader = new FileReader();
    textReader.onload = () => {
      const text = textReader.result;
      console.log('text', text);
    };
    textReader.readAsText(file);
  }, [file]);

  return (
    <div className="mx-auto max-w-screen-lg text-2xl pt-4 h-[1200px] flex justify-center">
      {/* <p className="text-xl">hello world</p> */}
      <div className="space-y-4 w-full">
        <div
          className="w-20 h-20 bg-black sm:bg-red-500 md:bg-yellow-500 lg:bg-blue-500 xl:bg-green-500 2xl:bg-blue-500"
          aria-hidden="true"
        />
        <div
          className="w-20 h-20 bg-black/40 sm:bg-red-500/40 md:bg-yellow-500/40 lg:bg-blue-500/40 xl:bg-green-500/40 2xl:bg-blue-500/40"
          aria-hidden="true"
        />
        <div className="w-20 h-20 bg-gradient-to-br from-black/40 to-white/60" aria-hidden="true" />
        <div>
          <Button
            color="red"
            onClick={() =>
              showModal({
                variant: 'alert',
                title: '댓글을 완전히 삭제할까요?',
                content:
                  '삭제된 댓글은 복구할 수 없습니다. 댓글에 달린 모든 답글도 함께 삭제됩니다.',
                actionButton: {
                  label: '삭제',
                  onClick: () => {
                    closeModal();
                  },
                },
                cancelButton: {
                  label: '취소',
                  onClick: () => closeModal(),
                },
              })
            }
          >
            open alert modal
          </Button>
        </div>

        <div>
          <Button
            onClick={() =>
              showModal({
                title: '댓글을 완전히 복구?',
                content:
                  '복구된 댓글은 삭제할 수 없습니다. 댓글에 달린 모든 답글도 함께 복구됩니다.',
                actionButton: {
                  label: '복구',
                  onClick: () => {
                    closeModal();
                  },
                },
                cancelButton: {
                  label: '취소',
                  onClick: () => closeModal(),
                },
              })
            }
          >
            open modal
          </Button>
        </div>
        <div>
          <Button
            color="white"
            onClick={() => showNoti({ title: '알람입니다.', variant: 'alert' })}
          >
            alert Noti
          </Button>
        </div>
        <div className="space-x-4">
          <NextLink href="/test" passHref>
            <Button as="a">Button as Anchor</Button>
          </NextLink>
          <NextLink href="/test">
            <Button>push button</Button>
          </NextLink>
        </div>
        <div className="space-x-4">
          <Button
            onClick={() => {
              fetcher('/api')
                .then((res) => setResult(JSON.stringify(res)))
                .catch((err) => showNoti({ variant: 'alert', title: err.message }));
            }}
          >
            STATUS
          </Button>
          <Button
            color="red"
            onClick={() => {
              fetcher('/api/error')
                .then((res) => setResult(JSON.stringify(res)))
                .catch((err) => showNoti({ variant: 'alert', title: err.message }));
            }}
          >
            ERROR
          </Button>
          <Button
            color="white"
            onClick={() => {
              setResult(null);
            }}
          >
            CLEAR
          </Button>
        </div>
        <p className="text-lg">{result || 'null'}</p>
      </div>
      <div>
        <label>hello</label>
        <input
          type="file"
          className="border border-black"
          onChange={(e) => {
            if (e.target.files) setFile(e.target.files[0]);
          }}
        />
        <Button onClick={() => handleFile()}>Submit</Button>
      </div>
      {console.log(file)}
    </div>
  );
}
