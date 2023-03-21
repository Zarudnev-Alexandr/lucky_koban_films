from django.db import models
from multiselectfield import MultiSelectField
from django.contrib.auth.models import User

STATUS_CHOICES = (
    ('Активирован', 'Активирован'),
    ('Не активирован', 'Не активирован')
)

GENRE_CHOICE = (
    ("аниме", "аниме"),
    ("биографический", "биографический"),
    ("боевик", "боевик"),
    ("вестерн", "вестерн"),
    ("военный", "военный"),
    ("детектив", "детектив"),
    ("детский", "детский"),
    ("документальный", "документальный"),
    ("драма", "драма"),
    ("исторический", "исторический"),
    ("кинокомикс", "кинокомикс"),
    ("комедия", "комедия"),
    ("концерт", "концерт"),
    ("короткометражный", "короткометражный"),
    ("криминал", "криминал"),
    ("мелодрама", "мелодрама"),
    ("мистика", "мистика"),
    ("музыка", "музыка"),
    ("мультфильм", "мультфильм"),
    ("мюзикл", "мюзикл"),
    ("научный", "научный"),
    ("нуар", "нуар"),
    ("приключения", "приключения"),
    ("реалити-шоу", "реалити-шоу"),
    ("семейный", "семейный"),
    ("спорт", "спорт"),
    ("ток-шоу", "ток-шоу"),
    ("триллер", "триллер"),
    ("ужасы", "ужасы"),
    ("фантастика", "фантастика"),
    ("фэнтези", "фэнтези"),
    ("эротика", "эротика"),
)

AGE_RATING_CHOICE = (
    (0, 0),
    (6, 6),
    (12, 12),
    (16, 16),
    (18, 18)
)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    description = models.TextField(blank=True, null=True, verbose_name="О себе")
    location = models.CharField(max_length=150, blank=True, verbose_name="Место жительства")
    date_joined = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    is_organizer = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "Профиль пользователя"
        verbose_name_plural = "Профиль пользователя"


class FilmCompany(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название компании")
    founding_date = models.DateField(verbose_name="Дата основания", null=True, blank=True)
    location = models.CharField(max_length=150, verbose_name="Расположение", null=True, blank=True)
    website = models.CharField(max_length=100, verbose_name="Сайт", null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Кинокомпания"
        verbose_name_plural = "Кинокомпания"


class Actor(models.Model):
    first_name = models.CharField(max_length=50, verbose_name="Имя")
    last_name = models.CharField(max_length=50, verbose_name="Фамилия")
    date_of_birth = models.DateField(verbose_name="Дата рождения", null=True, blank=True)

    def __str__(self):
        return self.last_name

    class Meta:
        verbose_name = "Актеры"
        verbose_name_plural = "Актеры"


class Director(models.Model):
    first_name = models.CharField(max_length=50, verbose_name="Имя")
    last_name = models.CharField(max_length=50, verbose_name="Фамилия")
    date_of_birth = models.DateField(verbose_name="Дата рождения", null=True, blank=True)

    def __str__(self):
        return self.last_name

    class Meta:
        verbose_name = "Режиссеры"
        verbose_name_plural = "Режиссеры"


class Film(models.Model):
    film_company = models.ForeignKey(FilmCompany, on_delete=models.CASCADE, verbose_name="Название компании")
    name = models.CharField(max_length=100, verbose_name="Название фильма")
    duration = models.TimeField(verbose_name="Длительность")
    actors = models.ManyToManyField(Actor, verbose_name="Актеры")
    directors = models.ManyToManyField(Director, verbose_name="Режиссеры")
    genre = MultiSelectField(max_choices=5, max_length=100, choices=GENRE_CHOICE, default="Не указано",
                             verbose_name="Жанр")
    age_rating = models.IntegerField(choices=AGE_RATING_CHOICE, verbose_name="Возрастной рейтинг");
    release_date = models.DateField(verbose_name="Дата выхода фильма", null=True, blank=True)
    budget = models.IntegerField(verbose_name="Бюджет", null=True, blank=True)
    fees_in_russia = models.IntegerField(verbose_name="Сборы в России", null=True, blank=True)
    fees_in_the_world = models.IntegerField(verbose_name="Сборы в мире", null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Фильмы"
        verbose_name_plural = "Фильмы"


class Serial(models.Model):
    film_company = models.ForeignKey(FilmCompany, on_delete=models.CASCADE, verbose_name="Название компании")
    name = models.CharField(max_length=100, verbose_name="Название сериала")
    genre = MultiSelectField(max_choices=5, max_length=100, choices=GENRE_CHOICE, default="Не указано",
                             verbose_name="Жанр")
    age_rating = models.IntegerField(choices=AGE_RATING_CHOICE, verbose_name="Возрастной рейтинг");

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Сериалы"
        verbose_name_plural = "Сериалы"


class SerialSeason(models.Model):
    serial = models.ForeignKey(Serial, on_delete=models.CASCADE)
    number = models.IntegerField(verbose_name="Номер сезона")
    name = models.CharField(max_length=100, verbose_name="Название сезона", null=True, blank=True)
    release_date = models.DateField(verbose_name="Дата выхода сезона", null=True, blank=True)
    budget = models.IntegerField(verbose_name="Бюджет", null=True, blank=True)
    fees_in_russia = models.IntegerField(verbose_name="Сборы в России", null=True, blank=True)
    fees_in_the_world = models.IntegerField(verbose_name="Сборы в мире", null=True, blank=True)

    def __str__(self):
        return f"{self.number}"

    class Meta:
        verbose_name = "Сезоны сериалов"
        verbose_name_plural = "Сезоны сериалов"


class SerialEpisode(models.Model):
    serial = models.ForeignKey(Serial, on_delete=models.CASCADE, verbose_name="Сериал")
    serial_season = models.ForeignKey(SerialSeason, on_delete=models.CASCADE, verbose_name="Сезон сериала")
    number = models.IntegerField(verbose_name="Номер серии", )
    name = models.CharField(max_length=100, verbose_name="Название серии", null=True, blank=True)
    release_date = models.DateField(verbose_name="Дата выхода серии", null=True, blank=True)
    actors = models.ManyToManyField(Actor)
    directors = models.ManyToManyField(Director)

    def __str__(self):
        return f"{self.number} {self.serial_season} {self.serial}"

    class Meta:
        verbose_name = "Эпизоды сериалов"
        verbose_name_plural = "Эпизоды сериалов"


class ReviewsFilm(models.Model):
    RATING_CHOICE = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    )
    film = models.ForeignKey(Film, on_delete=models.CASCADE, verbose_name="Фильм")
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    rating = models.IntegerField(choices=RATING_CHOICE, verbose_name="Оценка")
    review_text = models.CharField(max_length=500, verbose_name="Текст отзыва")

    def __str__(self):
        return f"{self.rating}"

    class Meta:
        verbose_name = "Отзыв о фильме"
        verbose_name_plural = "Отзыв о фильме"


class ReviewsSerialEpisode(models.Model):
    RATING_CHOICE = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    )
    serial_episode = models.ForeignKey(SerialEpisode, on_delete=models.CASCADE, verbose_name="Серия")
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    rating = models.IntegerField(choices=RATING_CHOICE, verbose_name="Оценка")
    review_text = models.CharField(max_length=500, verbose_name="Текст отзыва")

    def __str__(self):
        return f"{self.rating}"

    class Meta:
        verbose_name = "Отзыв об эпизоде сериала"
        verbose_name_plural = "Отзыв об эпизоде сериала"
