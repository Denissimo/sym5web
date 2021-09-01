<?php


namespace App\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Throwable;

class TestLoadAircraftCommand extends BaseRequestCommand
{
    protected static $defaultName = 'test:load:aircraft';

    protected function configure()
    {
        $this
            ->setName('test:load:aircraft')
            ->setDescription('Its a Test Aircraft Load.')
            ->setHelp('Test load aircraft command')
            ->addOption(
                'aircraft_id',
                null,
                InputOption::VALUE_REQUIRED,
                'Aircraft ID'
            )
            ->addOption(
                'token',
                null,
                InputOption::VALUE_REQUIRED,
                'Token'
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
        $aircraftId = $input->getOption('aircraft_id');
        $token = $input->getOption('token');
        $times = (int) $input->getOption('times');

        for($i=0; $i<$times; $i++) {
            try {
                $timeStart = microtime(true);
                $aircraftData = $this->requestAuthorized(
                    $token,
                    sprintf('/aircraft/%s', $aircraftId)
                );
                $timeEnd = microtime(true);
                $output->writeln(json_encode($aircraftData->id));
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