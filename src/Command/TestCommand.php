<?php


namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class TestCommand extends Command
{
    protected static $defaultName = 'app:test';

    protected function configure()
    {
        $this
            ->setName('app:test')
            ->setDescription('Its a Test.')
            ->setHelp('Just a test command');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Whoa Test!');

        return 0;
    }
}