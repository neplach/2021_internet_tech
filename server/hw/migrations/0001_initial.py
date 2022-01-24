# Generated by Django 4.0.1 on 2022-01-23 18:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='First',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('full_name', models.CharField(max_length=150, verbose_name='Название проекта')),
                ('max', models.IntegerField(verbose_name='Максимум участников')),
            ],
        ),
        migrations.CreateModel(
            name='Second',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150, verbose_name='ФИО')),
                ('fk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hw.first')),
            ],
        ),
    ]