<?php


namespace App\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Throwable;

class TestAuthorize extends BaseRequestCommand
{
    protected static $defaultName = 'test:authorize';

    protected function configure()
    {
        $this
            ->setName('test:authorize')
            ->setDescription('Its a Test authorize.')
            ->setHelp('Test authorize command')
            ->addOption(
                'username',
                null,
                InputOption::VALUE_OPTIONAL,
                'username',
                'owner1'
            )
            ->addOption(
                'password',
                null,
                InputOption::VALUE_OPTIONAL,
                'password',
                '12345'
            )
            ->addOption(
                'times',
                null,
                InputOption::VALUE_OPTIONAL,
                'How many times',
                1
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $timeStartCommon = microtime(true);
        $username = $input->getOption('username');
        $password = $input->getOption('password');
        $times = (int) $input->getOption('times');

        for($i=0; $i<$times; $i++) {
            try {
                $timeStart = microtime(true);
                $token = $this->authorize(
                    $username,
                    $password
                );
                $timeEnd = microtime(true);
                $output->writeln(json_encode(strlen($token)));
                $output->writeln(sprintf('%d-iteration; %f secons passed', $i, $timeEnd - $timeStart));
            } catch (Throwable $e) {
                $timeEnd = microtime(true);
                $output->writeln(
                    sprintf(
                        '%d-iteration;  %f secons passed; ERROR code: %s, message: %s',
                        $i,
                        $timeEnd - $timeStart,
                        $e->getCode(),
                        $e->getMessage()
                    )
                );
            }
        }

        $timeEndCommon = microtime(true);
        $output->writeln(sprintf('Common: %f secons passed', $timeEndCommon - $timeStartCommon));

        return 0;
    }
}